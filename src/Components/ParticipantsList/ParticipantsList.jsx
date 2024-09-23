export default function ParticipantsList({ participants }) {
  const participantsList = participants.map(({ _id: id, fullName, email }) => (
    <li key={id}>
      <p>{fullName}</p>
      <p>{email}</p>
    </li>
  ));
  return <ul>{participantsList}</ul>;
}
