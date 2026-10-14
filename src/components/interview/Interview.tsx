import React from "react";
import styles from "./Interview.module.css"
import { Rubric, type RubricCategory, type RubricLevel } from "../rubric/Rubric";


const explainLearningCategories: RubricCategory[] = [
{
    name: "Students explain their own work.",
    notes: [
    "how a part of the robot, code, or strategy works",
    "questions land with the student who can answer - no one has to explain everything",
    "why the team built it that way",
    "what they chose it over"
    ]
},
{
    name: "Students trace how they got there.",
    notes: [
    "attempts described in order",
    "something that did not work, and what they did next",
    "a moment that changed their thinking - a test, a failure, a conversation",
    ]
},
{
    name: "Students show how they know it works.",
    notes: [
    "testing they did",
    "results - counts, times, measurements",
    "a test that changed the design",
    ]
},
];

const explainLearningQuestions = [
"Pick a part of your robot or code, walk me through how it works and why you built it that way.",
"Tell me about a problem that took more than one try. What did you try?",
"What's something you built or coded that you ended up throwing away?",
"How do you know that works?",
"What can you do now that you couldn't at the start of the season?",
];

const workWithOthersCategories: RubricCategory[] = [
{
    name: "Students learned from and with each other.",
    notes: [
    "one student taught another a useable skill",
    "students add to/extend each other's answers",
    "a shared moment of understanding",
    ]
},
{
    name: "Decisions were made together",
    notes: [
    "how the team reached a decision",
    "a disagreement and how it was settled",
    "decisions made by students, not for them",
    ]
},
{
    name: "Outside ideas were made their own",
    notes: [
    "where an idea came from - another team, a video, a mentor (credit)",
    "what they changed to fit their robot (adapt)",
    "how they tested it on their robot (test)",
    "why it works (understand)",
    ]
}
];

const workWithOthersQuestions = [
"Who worked on what?",
"What's something you taught a teammate this season?",
"Tell me about a time your team disagreed about what to do. How did you decide?",
"Where did the idea for that come from? What did you change about it?",
"Which other team(s) have you learned something from?",
];


const interviewRubricLevels: RubricLevel[] = [
{
    name: "Heard with details",
    value: 2
},
{
    name: "Heard",
    value: 1
},
{
    name: "Not yet Heard",
    value: 0
},
]

export const Interview = () => {
    return (
        <div className={styles.Interview}>
        <p>Instructions: For each rubric, choose 2-3 questions to ask the students.  Fill out the rubric based on their answers.  Ask followups as needed.</p>
        <Rubric
            rubricTitle="Explain Your Learning"
            sampleQuestions={explainLearningQuestions}
            rubricCategories={explainLearningCategories}
            rubricLevels={interviewRubricLevels}
            />
        <Rubric
            rubricTitle="How You Worked with Others"
            sampleQuestions={workWithOthersQuestions}
            rubricCategories={workWithOthersCategories}
            rubricLevels={interviewRubricLevels}
        />
        </div>
  )
}