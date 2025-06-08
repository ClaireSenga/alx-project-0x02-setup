export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
  onClick?: () => void;
}

export interface PostProps {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: { street: string; city: string; zipcode: string };
}
