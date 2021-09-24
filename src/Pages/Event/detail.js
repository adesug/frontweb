import React, { useState } from "react";

export default function Detail() {
  const [address, setAddress] = useState("");

  return (
    <div class="flex justify-center h-screen items-center">
      <div class="flex max-w-sm w-full h-64 justify-center bg-white shadow-md rounded-lg overflow-hidden mx-auto flex flex-col p-5">
        <h3 class="text-2xl font-bold mb-4">Examples</h3>

        <div class="relative h-10 input-component mb-5">
          <input
            id="name"
            type="text"
            name="name"
            class="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
          />
          <label
            for="name"
            class="absolute left-2 transition-all bg-white px-1"
          >
            Name
          </label>
        </div>

        <div class="relative h-10 input-component mb-5">
          <input
            id="email"
            type="text"
            name="email"
            class="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
          />
          <label
            for="email"
            class="absolute left-2 transition-all bg-white px-1"
          >
            E-mail
          </label>
        </div>

        <div
          class={
            "relative h-10 input-component " +
            (address.length > 0 ? "" : "empty")
          }
        >
          <input
            id="address"
            type="text"
            name="address"
            onChange={(e) => setAddress(e.target.value)}
            class="h-full w-full border-gray-300 px-2 transition-all border-blue rounded-sm"
            value={address}
          />
          <label
            for="address"
            class="absolute left-2 transition-all bg-white px-1"
          >
            Address
          </label>
        </div>

        <button id="button">TEST</button>
      </div>
    </div>
  );
}
