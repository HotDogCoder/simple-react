import { connect } from 'react-redux'
import { useEffect } from 'react';
declare let window: any;

const FullWindowLayout = ({children}:any) => {

  return (
    <>
      <div className="mx-auto inset-0 absolute">
        <div className="mx-auto inset-0 absolute">{children}</div>
      </div>
    </>
  )
}

const mapStateToProps = (state: any) => ({

})

export default connect(mapStateToProps, {
}) (FullWindowLayout);