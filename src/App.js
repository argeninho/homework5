import React from "react";
import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    key1: "Barbara",
    key2: "Hepworth",
    key3: "bhepworth@react.com",
    key4: "love cats",
  });

  return (
    <div style={{ margin: "0 auto", width: "400px" }}>
      <div
        className="form"
        style={{
          backgroundColor: "#f2f2f2",
          padding: "50px",
          border: "none",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          id="firstname"
          style={{
            marginTop: "15px",
            paddingLeft: "10px",
            border: "0.5px solid #b3b3b3",
            borderRadius: "5px",
            outline: "none",
            lineHeight: "30px",
          }}
          value={form.key1}
          onChange={(e) => {
            setForm({
              ...form,
              key1: e.target.value,
            });
          }}
        ></input>
        <label
          style={{ fontSize: "14px", paddingLeft: "10px", paddingTop: "5px" }}
        >
          {form.key1}
        </label>
        <input
          type="text"
          id="lastname"
          style={{
            marginTop: "15px",
            paddingLeft: "10px",
            border: "0.5px solid #b3b3b3",
            borderRadius: "5px",
            outline: "none",
            lineHeight: "30px",
          }}
          value={form.key2}
          onChange={(e) => {
            setForm({
              ...form,
              key2: e.target.value,
            });
          }}
        ></input>
        <label
          style={{ fontSize: "14px", paddingLeft: "10px", paddingTop: "5px" }}
        >
          {form.key2}
        </label>
        <input
          type="email"
          id="email"
          style={{
            marginTop: "15px",
            paddingLeft: "10px",
            border: "0.5px solid #b3b3b3",
            borderRadius: "5px",
            outline: "none",
            lineHeight: "30px",
          }}
          value={form.key3}
          onChange={(e) => {
            setForm({
              ...form,
              key3: e.target.value,
            });
          }}
        ></input>
        <label
          style={{ fontSize: "14px", paddingLeft: "10px", paddingTop: "5px" }}
        >
          {form.key3}
        </label>
        <input
          type="text"
          id="hobbies"
          style={{
            marginTop: "15px",
            paddingLeft: "10px",
            border: "0.5px solid #b3b3b3",
            borderRadius: "5px",
            outline: "none",
            lineHeight: "30px",
          }}
          value={form.key4}
          onChange={(e) => {
            setForm({
              ...form,
              key4: e.target.value,
            });
          }}
        ></input>
        <label
          style={{ fontSize: "14px", paddingLeft: "10px", paddingTop: "5px" }}
        >
          {form.key4}
        </label>
      </div>
    </div>
  );
}
