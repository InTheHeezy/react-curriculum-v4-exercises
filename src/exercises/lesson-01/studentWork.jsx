//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Tonny An';
  const age = 30;
  const hobbies = [
    { id: 1, hobby: 'Video games' },
    { id: 2, hobby: 'Trading Card games' },
    { id: 3, hobby: 'Anime' },
  ];

  const header = 'Hello my name is ' + name + '.';
  const para =
    'I was born in Washington State and ' +
    age +
    ' years old. I am a logical person. ' +
    'I have graduated college with a Bachelors in Computer Science. ' +
    'However, with the current job market, I am having trouble breaking into the field.' +
    'I am excited to have joined Code the Dream to help me achieve my goals.';

  return (
    <div>
      {/* add JSX here */}
      <h>{header}</h>
      <p>{para}</p>
      <p>
        Here are the hobbies I enjoy
        {hobbies.map((hobby) => (
          <li key={hobby.id}>{hobby.hobby}</li>
        ))}
      </p>
    </div>
  );
}
