import React from 'react'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
        {gotoPrevPage &&<button className=".button-page" onClick={gotoPrevPage}>Previous</button>}
        {gotoNextPage &&<button className=".button-page" onClick={gotoNextPage}>Next</button>}
    </div>
  )
}
