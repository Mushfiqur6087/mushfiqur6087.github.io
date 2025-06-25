import { Award, Trophy, Medal } from "lucide-react";

interface Achievement {
  title: string;
  organization: string;
  description: string;
  icon: React.ElementType;
  year: string;
}

const AchievementsList = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    {/* No achievements to display */}
  </div>
);

export default AchievementsList;
