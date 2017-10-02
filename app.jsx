class QuizApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            image: "img/History/paracas.jpg",
            question: "¿De qué cultura son caracteriticas las trepanaciones craneanas?",
            answerOptions: ["Nazca", "Chimu", "Paracas"],
            answer: "Paracas",
            progress: $('#bar').css('width', 0 + '%')
        };

        this.NextQuestion = this.NextQuestion.bind(this);

    }

    onClick(e, index) {
        console.log(this.props[index]);
        this.setState({
            image: "img/History/virrey.jpg",
            question: "¿Cuál fue el último virrey del Perú?",
            answerOptions: ["Francisco de Borja y Aragon", "Jose de la Serna Hinojosa", "Blasco Nuñez Vela"],
            answer: "Jose de la Serna Hinojosa",
            progress: $('#bar').css('width',20 + '%')
        });
    }


    NextQuestion() {
        const length = this.props.questions.length;
        const { index } = this.state;
        if (index === length - 1) {
            this.setState({
                complete: true
            });
        } else {
            this.setState({
                index: this.state.index + 1,
                answer: null
            });
        }
    }
    render() {
        const getAnswerList = (answers) => {
            return answers.map((answer, index) => {
                return (
                    <li key={index}>
                        <a className="btn btn-block btn-warning btnClic" id={index} onClick= { (e) => this.onClick (e, index) }>{answer}</a>
                    </li >

                );
            });
        }
        const AnswerList = ({ answers }) => {

            return (
                <div>
                    <ul>{getAnswerList(answers)}</ul>
                </div>
            );
        }
        const Quiz = (props) => {
            console.log(props.answerOptions);
            return (
                <div className="quiz">
                    <h2 className="question">{props.question}</h2>
                    <AnswerList answers={props.answerOptions} />

                </div>
            );
        }
        const Images = (props) => {
            return (
                <div>
                    <img className="imageSize" align="center" src={props.image} alt="" />
                </div>
            );
        }
        return (
            <div className="questions container-fluid">
                <div className="row">
                    <div className="col-md-12 col-xs-12 col-sm-12">
                        <div id="myProgress">
                            <div id="bar" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <span class="sr-only">0%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xs-6 col-sm-6">
                        <Images
                            image={this.state.image}
                        />
                    </div>
                    <div className="col-md-6 col-xs-6 col-sm-6">
                        <Quiz
                            question={this.state.question}
                            answer={this.state.answer}
                            answerOptions={this.state.answerOptions}
                        />
                    </div>
                </div>

            </div>
        );
    }

}

const questionsArray = [
    {
        image: "img/History/paracas.jpg",
        question: "¿De qué cultura son caracteriticas las trepanaciones craneanas?",
        answers: ["Nazca", "Chimu", "Paracas"],
        correctAnswer: "Paracas"
    },
    {
        image: "img/History/virrey.jpg",
        question: "¿Cuál fue el último virrey del Perú?",
        answers: ["Francisco de Borja y Aragon", "Jose de la Serna Hinojosa", "Blasco Nuñez Vela"],
        correctAnswer: "Jose de la Serna Hinojosa"
    },
    {
        image: "img/History/mancoInca.jpg",
        question: "¿Quien ayudo a los españoles en su camino de Cajamarca a Cusco en 1583?",
        answers: ["Calcuchimac", "Manco Inca", "Huascar"],
        correctAnswer: "Manco Inca"

    },
    {
        image: "img/History/primerGobierno.jpg",
        question: "¿Cuanto tiempo duró el gobierno del primer Presidente del Peru?",
        answers: ["24 meses", "13 meses", "4 meses"],
        correctAnswer: "4 meses"
    },
    {
        image: "img/History/conflictos.jpg",
        question: "¿Con cuál de estos paises el Perú tuvo más conflictos armados?",
        answers: ["Chile", "Ecuador", "Bolivia"],
        correctAnswer: "Ecuador"
    }
];

ReactDOM.render(<QuizApp questions={questionsArray} />, document.getElementById("containerQuizz"));