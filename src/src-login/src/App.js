import Header from './components/Header'
import'./App.css';
import Form from './components/Form' 
import Nav from './components/Nav'
import ReCAPTCHA from 'react-google-recaptcha'


const App = () => {
    function onChange(value) {
        console.log('Captcha value:', value);
    }


    


    function App() {
        return (
            <div className="App">
                <h1 className="Title">AppName</h1>
                <Nav />
                <div className="body">
                    <div className="main">
                        <Header />
                        <Form />
                          <ReCAPTCHA
        sitekey="YOUR-SITE-KEY"
        onChange={onChange}
      />


                    </div>
                </div>
            </div>


            
            
            
            
        );
    }

}
    export default App;

