import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userVerify } from "../../../redux/action-creators/user-action-creator"
import Loader from "../../Loading/Loading.component"
import {
  VerifiedCard,
  VerifiedContainer,
  VerifiedFailedIcon,
  VerifiedLink,
  VerifiedMessage,
  VerifiedSuccessIcon,
} from "./Verification.styles"

const Verification = ({ history, location, token }) => {
  const { isVerified, loading, error, message } = useSelector(
    (state) => state.userVerify
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userVerify(token))
  }, [dispatch, token])

  if (loading) return <Loader />

  if (error)
    return (
      <VerifiedContainer>
        <VerifiedCard>
          <VerifiedFailedIcon />
          <VerifiedMessage>{error}</VerifiedMessage>
          <VerifiedLink to="/auth/sign-up">Sign Up Again</VerifiedLink>
        </VerifiedCard>
      </VerifiedContainer>
    )

  if (isVerified)
    return (
      <VerifiedContainer>
        <VerifiedCard>
          <VerifiedSuccessIcon />
          <VerifiedMessage>{message}</VerifiedMessage>
          <VerifiedLink to="/auth/sign-in">Go to Login</VerifiedLink>
        </VerifiedCard>
      </VerifiedContainer>
    )
  return null
}

export default Verification
