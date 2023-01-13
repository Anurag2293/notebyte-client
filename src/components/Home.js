import Notes from './Notes';

export const Home = (props) => {
    return (
        <div className="container">
            <Notes showAlert={props.showAlert}/>
        </div>
    )
}

export default Home;