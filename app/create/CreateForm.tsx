"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { Span } from "next/dist/trace";

export default function CreateForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <form className="w-1/2">
        <label>
          <span>Title:</span>
          <input
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Body:</span>
          <textarea
            required
            onChange={(e) => setBody(e.target.value)}
            value={body}
          />
        </label>
        <label>
          <select
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <button className="btn-primary" disabled={isLoading}>
            {isLoading && <span>Addng...</span>}
            {!isLoading && <span>Add Ticket</span>}
          </button>
        </label>
      </form>
    </>
  );
}
