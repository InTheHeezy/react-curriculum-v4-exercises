//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Tonny An';
  const age = 30;
  const hobbies = ['Video games', 'Card games', 'Anime', 'Movies'];

  const header = 'Hello my name is ' + name + '.';
  //document.getElementById('header').innerHTML = header;
  const para =
    'I was born in Washington State and ' +
    age +
    ' years old. I am a logical person and that tends to be the best mindset for programming turns out. I have graduated college with a Bachelors in Computer Science and with the current job market, am having trouble breaking into the field. I am excited to have joined Code the Dream to help me achieve my goals.';
  //document.getElementById('paragraph').innerHTML = para;

  return (
    <div>
      {/* add JSX here */}
      <h id="header"></h>
      <p id="paragraph"> </p>
      <p id="hobbies"></p>
    </div>
  );
}
