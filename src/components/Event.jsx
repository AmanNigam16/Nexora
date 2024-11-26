const Event = ({ event }) => {
  return (
    <div className="event-card">
      <h3 className="post-card">{event.title}</h3>
      <p className="post-title">{event.body}</p>
      <p className="post-content">Tags: {event.tags.join(',')}</p>
      <p className="post-author">{`Likes:${event.reactions.likes},Dislikes:${event.reactions.dislikes}`}</p>
    </div>
  );
};

export default Event;
