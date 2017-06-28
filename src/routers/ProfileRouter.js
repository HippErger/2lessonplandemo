import express from 'express';
import ProfileController from '../controllers/ProfileController';

const router = express.Router();
const TeacherProfilesPath = '/api/teachers';

router.post(TeacherProfilesPath, ProfileController.create);
router.get(TeacherProfilesPath, ProfileController.list);
router.get(TeacherProfilesPath + '/:id', ProfileController.listOne);
router.put(TeacherProfilesPath + '/:id', ProfileController.update);
router.delete(TeacherProfilesPath + '/:id', ProfileController.delete);

export default router;
