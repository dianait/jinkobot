import * as React from "react"

const Emoji = ({ label, symbol, size, ...rest }) => {
  return (
    <>
      <span
        style={{ fontSize: size || "1.5rem" }}
        aria-hidden={label ? undefined : true}
        aria-label={label}
        role="img"
        {...rest}
      >
        {symbol}
      </span>
      &nbsp;
    </>
  )
}

export default React.memo(Emoji)
