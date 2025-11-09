import './App.css';
import Header from './components/Header/Header';
import AddForm from './components/BookList/AddForm';

function App() {
    return (
        <>
            <div className="container mt-4">
                <Header />
                <AddForm />
            </div>
        </>
    );
}

export default App;
