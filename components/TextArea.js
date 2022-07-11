import React, { useEffect } from 'react';
import Button from './Button';
export default function TextArea({ notes }) {
  const [text, setText] = React.useState('');
  let notesSort = notes.reverse();

  useEffect(() => {
    console.log(text);
  }, [text]);

  const saveNote = (e) => {
    e.preventDefault();
    const textarea = document.getElementById('comments');
    const comment = textarea.value;
    const note = {
      text: '- ' + comment,
      date: formatDate(),
    };

    notesSort.push(note);

    setText(comment);
    textarea.value = '';
  };

  return (
    <>
      <section>
        <h2 style={{ textDecoration: 'underline' }}>
          OBSERVACIONES SOBRE AMELIA
        </h2>
        <aside>
          {notesSort.map((note, index) => {
            return (
              <div key={index}>
                <p>📅 {note.date}</p>
                <p>{note.text}</p>
              </div>
            );
          })}
          <h3 style={{ marginTop: '11rem' }}>Observaciones de la sesión:</h3>{' '}
        </aside>
        <textarea
          id="comments"
          placeholder="Notas de la sesión de Amelia de hoy"
        />
        <br />
        <form onSubmit={saveNote}>
          <button type="submit">GUARDAR</button>
        </form>
      </section>
      <style jsx>{`
        button {
          background-color: #ff8007;
          color: white;
          border-radius: 25px;
          border: none;
          width: 200px;
          height: 45px;
          font-size: 1.5rem;
          margin-top: 1rem;
          margin-left: 35rem;
        }
        h2 {
          margin-bottom: -1rem;
          margin-left: 3rem;
          font-size: 2.3rem;
        }
        section {
          width: 100vh;
          padding-left: 1rem;
          margin-left: 4rem;
        }
        aside {
          width: 50%;
          height: 88%;
          font-size: 1.4rem;
          padding: 3rem;
        }
        textarea {
          margin-top: -8rem;
          width: 50%;
          font-size: 1.4rem;
          padding: 3rem;
        }
      `}</style>
    </>
  );
}

const formatDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
