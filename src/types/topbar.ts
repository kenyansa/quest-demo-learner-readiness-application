export interface Learner {
  name: string;
  level: string;
}

export interface TopbarProps {
  learner: Learner;
  onLogout: () => void;
}
