import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

const Folder = () => (
    <i class="fa fa-folder" aria-hidden="true"></i>
);

const File = () => (
    <i class="fa fa-file-o" aria-hidden="true"></i>
);

function Name({text}) {
    return (
      <span className="name">
        {text}
      </span>
    );
}

function Message({latestCommit}) {
    const { message } = latestCommit;
    return (
      <div className="message">
        {message}
      </div>
    );
}

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
      <span className="time">{timeString}</span>
    );
}

const testFiles =[
{
    id: 1,
    name: 'build',
    type: 'folder',
    updated_at: "2017-12-30 20:24:00",
    latestCommit: {
    message: 'Initial commit'
    }
},
{
    id: 2,
    name: 'docs',
    type: 'folder',
    updated_at: "2015-03-15 21:24:00",
    latestCommit: {
    message: 'Initial commit'
    }
},
{
    id: 3,
    name: 'flowconfig',
    type: 'file',
    updated_at: "2014-03-19 19:24:00",
    latestCommit: {
    message: 'Added a readme'
    }
},
];

function FileList(){
    return(
        <table className ="table">
        
        {testFiles.map(( file, id ) =>
            <tr key={id}>
            <td> {file.type==='folder' ? <Folder /> : <File /> } {file.name}</td>
            <td>{file.latestCommit.message}</td>
            <td><Time time = {file.updated_at} /></td>
            </tr>
     
           ) }
     
       </table>
    );
}
ReactDOM.render(<FileList list={testFiles} />, document.getElementById('root'));