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
  const [newOptionText, setNewOptionText] = useState('');
  const [workingOptions, setWorkingOptions] = useState(question.options || []);

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

  //Add option to multiple choice question
  const handleAddOption = () => {
    dispatch({
      type: 'ADD_OPTION_TO_QUESTION',
      payload: { questionId: question.id, optionText: newOptionText.trim() },
    });

    setNewOptionText('');
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {isEditing ? (
            <>
              <button className={styles['save-btn']} onClick={handleSave}>
                Save
              </button>
              <button className={styles['cancel-btn']} onClick={handleCancel}>
                Cancel
              </button>
            </>
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
              <li key={`${option}-${index}`} className={styles['option-item']}>
                {isEditing ? (
                  <div>
                    <input
                      type="text"
                      className={styles['option-item']}
                      value={option}
                      onChange={(e) =>
                        dispatch({
                          type: 'UPDATE_OPTION_TEXT',
                          payload: {
                            questionId: question.id,
                            optionIndex: index,
                            newOptionText: e.target.value,
                          },
                        })
                      }
                    />
                    <button
                      className={styles['option-delete-btn']}
                      onClick={(e) => {
                        dispatch({
                          type: 'DELETE_OPTION_FROM_QUESTION',
                          payload: {
                            questionId: question.id,
                            optionIndex: index,
                          },
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <span className={styles['option-text']}>{option}</span>
                )}
              </li>
            ))}
          </ul>

          {isEditing && (
            <div className={styles['add-option']}>
              <input
                type="text"
                value={newOptionText}
                className={styles['add-option input']}
                onChange={(e) => setNewOptionText(e.target.value)}
              />
              <button
                type="button"
                className={styles['add-option button']}
                onClick={handleAddOption}
              >
                Add Option
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
