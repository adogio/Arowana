/*
 * A simple React component
 */
class Application extends React.Component {

    constructor(props) {
        super(props);
    }

    test = [1, 2, 3, 4, 5];

    render() {
        return <div>
            {this.test.map(this.renderitems)}
            {this.test.map(this.renderitemstwo)}
        </div>;
    }
    renderitems(index, value) {
        return <div
            draggable="true"
            key={index}
            onDragStart={() => { console.log("test") }}
            style={{ backgroundColor: "white", width: "50px", height: "50px", border: "1px solid red" }}>{value}</div>
    }
    renderitemstwo(index, value) {
        return <div
            key={index}
            onMouseEnter={() => { console.log("test") }}
            style={{ backgroundColor: "white", width: "50px", height: "50px", border: "1px solid green" }}>{value}</div>
    }

}

/*
 * Render the above component into the div#app
 */
React.render(<Application />, document.getElementById('app'));