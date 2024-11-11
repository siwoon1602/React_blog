import "./App.css";
import { React, useState } from "react";

function App() {
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  const [date, setDate] = useState([
    "1월1일 발행",
    "11월12일 발행",
    "3월7일 발행",
  ]);

  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [name, setName] = useState(0);
  const [input, setInput] = useState("");

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <h4>React Blog</h4>
        </div>
        {title.map((item, index) => {
          return (
            <div className="list" key={index}>
              <h4
                onClick={() => {
                  {
                    setName(index);
                    setModal(!modal);
                  }
                }}
              >
                {item}
              </h4>
              <span
                onClick={() => {
                  let copy = [...like];
                  copy[index] = copy[index] + 1;
                  setLike(copy);
                }}
              >
                👍
              </span>
              <span>{like[index]}</span>

              <p>{date[index]}</p>
              <button
                onClick={() => {
                  let copy = [...title];
                  copy.splice(index, 1);
                  setTitle(copy);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="ex ) 글 제목"
        ></input>

        <button
          onClick={() => {
            if (input == "") {
              return;
            }
            let dates = [...date];
            let likes = [...like];
            let titles = [...title];
            titles.unshift(input);
            dates.unshift(
              `${new Date().getMonth()}월${new Date().getDay()}일 발행`
            );
            likes.unshift(0);
            setTitle(titles);
            setLike(likes);
            setDate(dates);
          }}
        >
          발행
        </button>
        {modal ? <Modal title={title} setTitle={setTitle} name={name} /> : null}
      </div>
    </>
  );
}

function Modal({ title, setTitle, name }) {
  return (
    <div className="modal">
      <h4>{title[name]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let name = [...title];
          name[0] = "여자코트 추천";
          setTitle(name);
        }}
      >
        글 수정
      </button>
    </div>
  );
}

export default App;
