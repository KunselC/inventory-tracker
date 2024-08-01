'use client'
import Image from "next/image";
import { useState, useEffect} from 'react'
import {firestore} from '@/firebase'
import {Box} from '@mui/material'
import {Typography} from '@mui/material'


export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const [itemName, setItemName] = useState('')
  return <Box><Typography variant = 'h1'>Inventory Management</Typography>
  </Box>
}