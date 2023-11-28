import express from "express";
import { upload, see, edit, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.get("/upload", upload); //정규식을 통해 id에 문자가 들어오는 걸 막았다. 이제 upload가 뒤에 와도 됨

export default videoRouter;
