import type { Lesson } from '../types/lesson';
export function ProgressPanel({lesson}:{lesson?:Lesson}){return <aside className="progress" aria-label="Progress"><h4>Your progress</h4><p className="small">XP: 120 • Streak: 3 days</p>{lesson&&<><p className="small">Current: {lesson.title}</p><ol className="caption"><li>Read explanation</li><li>Try sandbox</li><li>Pass quiz</li></ol></>}</aside>}
