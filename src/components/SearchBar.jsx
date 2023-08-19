import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import React, { useState } from 'react'

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Paper
      component={"form"}
      onSubmit={() => { }}
      sx={{
        borderRadius: '10px',
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 }
      }}>
      <input type="text" placeholder="Search..." value={searchValue} onChange={(event) => { setSearchValue(event.target.value) }} className="search-bar" />
      <IconButton type="submit" sx={{ p: '10px', color: 'red' }}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar