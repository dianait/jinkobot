/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

function Button({ text, type, width, backgroundColor, color }) {
  return (
    <button type={type} style={{ width, backgroundColor, color }}>
      {text}
      <style jsx>{`
        button {
          margin: 3rem;
          height: 3rem;
          border: none;
          border-bottom: 1px solid lightgray;
          border-right: 1px solid lightgray;
          outline: none;
          border-radius: 30px;
          font-size: 1.4rem;
          cursor: pointer;
        }
        button:hover {
          box-shadow: 1px 1px 10px 1px lightgray;
        }
      `}</style>
    </button>
  );
}

export default Button;
