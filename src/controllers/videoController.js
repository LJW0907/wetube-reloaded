export const trending = (req, res) => res.send("Homepage Videos");
export const see = (req, res) => {
  return res.send(`Watch Videos #${req.params.id}`);
};
export const edit = (req, res) => res.send("Edit Videos");
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
