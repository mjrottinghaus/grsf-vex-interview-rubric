import React from 'react'
import styles from "./RubricItem.module.css"
import { useEffect, useId, useRef, useState } from 'react';

// import { getImageUrl } from '../../utils' if we ever want to add images with these as well

interface RubricItemProps {
    rubricItemName: string;
    rubricItemListenForNotes: string[];
    rubricCategories: string[]
}

export const RubricItem = ({ rubricItemName, rubricItemListenForNotes, rubricCategories }: RubricItemProps ) => {
    const [activeRubricSelection, setRubricSelection] = useState<number | null>(null);

    const rubricSelectionToggle = (buttonIndex: number) => {
        setRubricSelection(prevActive => prevActive === buttonIndex ? null : buttonIndex);
    };

    // tapping the name pins the notes open (mobile); hovering shows them via CSS (desktop)
    const [notesOpen, setNotesOpen] = useState(false);
    const headingRef = useRef<HTMLTableCellElement>(null);
    const notesId = useId();
    const hasNotes = rubricItemListenForNotes.length > 0;

    // close the notes when tapping anywhere else or pressing Escape
    useEffect(() => {
        if (!notesOpen) return;

        const closeOnOutsidePress = (event: PointerEvent) => {
            if (!headingRef.current?.contains(event.target as Node)) setNotesOpen(false);
        };
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setNotesOpen(false);
        };

        document.addEventListener('pointerdown', closeOnOutsidePress);
        document.addEventListener('keydown', closeOnEscape);
        return () => {
            document.removeEventListener('pointerdown', closeOnOutsidePress);
            document.removeEventListener('keydown', closeOnEscape);
        };
    }, [notesOpen]);

    return (
        <section
            className={styles.container}
            id="rubric-item"
            style={{ '--rubric-category-count': rubricCategories.length } as React.CSSProperties}
        >
            <tr>
                <td className={styles.rubricRowHeading} ref={headingRef}>
                    {hasNotes ? (
                        <>
                            <button
                                type="button"
                                onClick={() => setNotesOpen(open => !open)}
                                aria-expanded={notesOpen}
                                aria-describedby={notesId}
                                className={styles.rubricNameButton}
                            >
                                {rubricItemName}
                            </button>
                            <ul
                                id={notesId}
                                role="tooltip"
                                data-open={notesOpen}
                                className={styles.rubricNotes}
                            >
                                {rubricItemListenForNotes.map((note, index) => (
                                    <li key={index}>{note}</li>
                                ))}
                            </ul>
                        </>
                    ) : (
                        rubricItemName
                    )}
                </td>
                {rubricCategories.map((label, index) => {
                    const isSelected = activeRubricSelection === index;
                    
                    return (
                    <td key={index} className={styles.rubricRowCategory}>
                        <button
                            onClick={() => rubricSelectionToggle(index)}
                            aria-pressed={isSelected}
                            className={styles.rubricRowButton}
                        >
                        {label}
                        </button>
                    </td>
                    );
                })}
            </tr>
            <tr>
                <td className={styles.rubricRowNotesCell}>
                    <label className={styles.rubricRowNotes}>
                        Notes:
                        <input className={styles.rubricRowNotesInput} />
                    </label>
                </td>
            </tr>
        </section>
    )
}
