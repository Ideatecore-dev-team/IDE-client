/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchCompanyInfo } from "../api/api"; // Import the fetch function

export const Subscribe = ({ hideAt }) => {
    return (
        <div className="subscribe-button flex items-center self-stretch">
            <input type="text" className=" flex w-[200px] h-[48px] p-3 items-center gap-3 rounded-s-md border border-neutral-3 bg-white text-neutral-3" placeholder="Email anda"/>
            <button className="flex h-12 py-3 px-4 justify-center items-center gap-[10px] rounded-e-md bg-brand-red hover:bg-brand-red-hover w-full">
                <p className="text-sm font-bold">
                    Subscribe
                </p>
            </button>
        </div>
    );
};
