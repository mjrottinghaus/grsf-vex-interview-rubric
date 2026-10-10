import React from "react";
import styles from "./Rubric.module.css"
import { RubricItem } from "./RubricItem";

export interface RubricCategory {
  name: string;
  notes: string[];
}

export interface RubricLevel {
    name: string
    value: number
}

interface RubricProps {
    rubricTitle: string
    sampleQuestions: string[]
    rubricCategories: RubricCategory[]
    rubricLevels: RubricLevel[]
}

export const Rubric = ({ rubricTitle, sampleQuestions, rubricCategories, rubricLevels }: RubricProps) => {
    return (
    <div className={styles.rubric}>
        <h1>{rubricTitle}</h1>

        <ul>
            {
                sampleQuestions.map(question => {
                    return <li>{question}</li>
                })
            }
        </ul>

        <table>
            {rubricCategories.map((category) => {          
                return (
                    <RubricItem
                    rubricItemName={category.name}
                    rubricItemListenForNotes={category.notes}
                    rubricCategories={ rubricLevels.map((level) => {
                        return `${level.name}: ${level.value} point(s)`
                    }) }
                    />
                );
            })}
        </table>
    </div>
  )
}
