import { CoursePathModel } from '@models/course-map/course-path';
export interface CourseMapModel {
  alternate_paths?: Array<Object>;
  course_path: CoursePathModel;
}
