//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//Import components here
import SnackHeader from './SnackHeader';
import SnackFooter from './SnackFooter';
import SnackList from './SnackList';

function SnackApp() {
  return (
    <div>
      <SnackHeader />
      <SnackList />
      <SnackFooter />
    </div>
  );
}

export default function StudentWork() {
  return SnackApp();
}
