import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const { dispatch } = useContext(SurveyContext);

  const [isEditing, setIsEditing] = useState(false);

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // TODO: Students will add edit functionality here
  const handleEdit = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: question.id },
    });
    setIsEditing(true);
  };

  // TODO: Students will add save functionality here
  const handleSave = () => {
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: { id: question.id, newText: workingText },
    });

    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: null },
    });

    setIsEditing(false);
  };

  const handleCancel = () => {
    setWorkingText(question.question);
    setIsEditing(false);
  };

  // TODO: Students will add delete functionality here
  const handleDelete = () => {
    const confirmation = window.confirm(
      'Are you sure you want to delete this question?'
    );

    if (confirmation) {
      dispatch({
        type: 'DELETE_QUESTION',
        payload: { id: question.id },
      });
    }
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {isEditing ? (
            <div className={styles['question-actions']}>
              <button className={styles['save-btn']} onClick={handleSave}>
                Save
              </button>
              <button className={styles['cancel-btn']} onClick={handleCancel}>
                Cancel
              </button>
            </div>
          ) : (
            <button className={styles['edit-btn']} onClick={handleEdit}>
              Edit
            </button>
          )}
          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      <div className={styles['question-content']}>
        {isEditing ? (
          <input
            type="text"
            className={styles['title-edit']}
            value={workingText}
            onChange={(e) => setWorkingText(e.target.value)}
          />
        ) : (
          <h3>{workingText}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                <span className={styles['option-text']}>{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
