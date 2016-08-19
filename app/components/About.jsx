var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on react. Built from complete react web app course.</p>
      <p>Here are the tools used :</p>
      <ul>
        <li>
          <a href="http://facebook.github.io/react">React</a> - This is the javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map api for the datas.
        </li>
      </ul>

    </div>


  )
};

module.exports = About;