"use client";
import { useEffect } from 'react';
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Navigation from '../Navigation'; // Import the Navigation component
import React, { useRef, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import Head from 'next/head';
