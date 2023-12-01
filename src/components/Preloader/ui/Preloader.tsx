import { memo } from "react";
import Spinner from 'react-bootstrap/Spinner';

export const Preloader = memo(() => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
})