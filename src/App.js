import React, { useState } from "react";
import "./App.css";

function Modal({ title, color, setTitle, index }) {
  return (
    <div
      style={{
        backgroundColor: "black",
        fontSize: "18px",
        color: "white",
        margin: "30px 20px",
        height: "300px",
        backgroundColor: `${color}`,
      }}
    >
      <h4>{title[index]}</h4>
      <p>날짜</p>
      <p>상세 내용</p>
      <button
        onClick={() => {
          const newTitles = [...title];
          newTitles[0] = "여자 코트추천";
          setTitle(newTitles);
        }}
      >
        변경
      </button>
    </div>
  );
}

export default function App() {
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [seleteNum, setSeleteNum] = useState(null);
  const [input, setInput] = useState();

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ fontSize: "18px" }}>ReactBlog </h4>
      </div>

      <button
        onClick={() => {
          const newTitles = [...title].sort();
          setTitle(newTitles);
        }}
      >
        정렬
      </button>
      {title.map((item, index) => {
        return (
          <div className="list" key={index}>
            <h4
              className="title"
              onClick={() => {
                setSeleteNum(index);
                setModal(seleteNum !== index || !modal);
              }}
            >
              {item}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  const newLike = [...like];
                  newLike[index] += 1;
                  setLike(newLike);
                }}
              >
                👍
              </span>
              {like[index]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                const newTitles = [...title];
                const newLikes = [...like];
                newTitles.splice(index, 1);
                newLikes.splice(index, 1);
                setTitle(newTitles);
                setLike(newLikes);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          const newTitles = [...title];
          const newLikes = [...like];
          newLikes.push(0);
          newTitles.push(input);
          setTitle(newTitles);
          setLike(newLikes);
        }}
      >
        버튼
      </button>
      {modal ? (
        <Modal
          color={"black"}
          title={title}
          setTitle={setTitle}
          index={seleteNum}
        />
      ) : null}
    </div>
  );
}
