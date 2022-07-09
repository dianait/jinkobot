import React, { useEffect } from 'react';
import Button from './Button';
export default function TextArea({ notes }) {
  const [text, setText] = React.useState('');

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
    notes.push(note);
    setText(comment);
    textarea.value = '';
  };
  return (
    <>
      <section>
        <h2>NOTAS</h2>
        <aside>
          {notes.map((note, index) => {
            return (
              <div key={index}>
                <p>📅 {note.date}</p>
                <p>{note.text}</p>
              </div>
            );
          })}
        </aside>
        <textarea
          id="comments"
          placeholder="Notas de la sesión de Amelia de hoy"
        />
        <br />
        <form onSubmit={saveNote}>
          <Button
            text="GUARDAR"
            type="submit"
            width="200px"
            backgroundColor="#FF8007"
            color="white"
          />
        </form>
      </section>
      <style jsx>{`
        h2 {
          margin-bottom: -2rem;
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
