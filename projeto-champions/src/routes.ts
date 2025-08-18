import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";
import * as ClubsController from "./controllers/clubs-controller";

const router = Router();

router.get("/players", PlayerController.getPlayer);
router.post("/players", PlayerController.postPlayer);
router.delete("/players/:id", PlayerController.deletePlayer);
router.patch("/players/:id", PlayerController.updatePlayer);
router.get("/players/:id", PlayerController.getPlayerById);

router.get("/clubs", ClubsController.getClubs);
router.post("/clubs", ClubsController.postClub);
router.delete("/clubs/:id", ClubsController.deleteClub);
router.get("/clubs/:id", ClubsController.getClubById);


export default router;
