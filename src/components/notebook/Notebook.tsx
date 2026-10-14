import React from "react";
import styles from "./Notebook.module.css"
import { Rubric, type RubricCategory, type RubricLevel } from "../rubric/Rubric";
import notebook_rubric from "../../data/notebook-rubric.json"

type ScoringOptions = Record<string, string>;

// 2. An individual criteria item
interface Criterion {
  category_name: string;
  scoring_options: ScoringOptions;
}

// 3. A top-level rubric section containing an array of criteria
interface RubricSection {
  category_name: string;
  critera: Criterion[]; // Note: matches the spelling "critera" in your JSON
}

const createRubricLevels = (level_import: ScoringOptions) => {
    const levels: RubricLevel[] = [];

    Object.entries(level_import).forEach(([score, description]) => {
        levels.push({
            "name": description,
            "value": Number(score)
        })
    });

    return levels;
}

const createRubricCategories = (category_import: Criterion[]) => {
    const categories: RubricCategory[] = []

    category_import.forEach((rubricSection: Criterion) => {
        categories.push({
            name: rubricSection.category_name,
            notes: []
        })
    })
    return categories;
};

export const Notebook = () => {
    // TODO categories need to become some sort of header on this
    // const scoringCategories: RubricLevel[] = createRubricLevels(notebook_rubric.scoring_categories);
    const rubricSections: RubricSection[] = notebook_rubric.rubric_sections;

    return (
        <div className={styles.Notebook}>

        {
            rubricSections.map((rubricSection: RubricSection) => {
                return <div><h1>{rubricSection.category_name}</h1>
                {
                    rubricSection.critera.map((criteria: Criterion) => {
                        return <Rubric
                            rubricTitle=""
                            sampleQuestions={[]}
                            rubricCategories={
                                [
                                    {
                                        name: criteria.category_name,
                                        notes: []
                                    }
                                ]
                            }
                            rubricLevels={createRubricLevels(criteria.scoring_options).reverse()}
                        />
                    })
                }
                </div>
            })
        }

        </div>
  )
}