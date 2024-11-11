import { ParagraphStyled, StyledParticipant, StyledParticipantList } from "./ParticipantsList.styled";

export default function ParticipantsList({ participants }) {
  const participantsList = participants.map(({ _id: id, fullName, email }) => (
    <StyledParticipant key={id}>
      <ParagraphStyled>{fullName}</ParagraphStyled>
      <ParagraphStyled>{email}</ParagraphStyled>
    </StyledParticipant>
  ));
  return <StyledParticipantList>{participantsList}</StyledParticipantList>;
}


