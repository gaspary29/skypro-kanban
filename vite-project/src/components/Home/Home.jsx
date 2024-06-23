import { useEffect, useState } from "react";
import Main from "../Main/Main";
import { Wrapper } from "../shared.styled";
import Header from "../../components/Header/Header";
import { ErrorMessage } from "./home.styled";
import { useUser } from "../../hooks/userUser";
import { useTasks } from "../../hooks/userTusk";
import { getTodos } from "../../api";

const Home = () => {
  const { userData } = useUser();
  const { setTasks } = useTasks();
  const [getTasksError, setGetTasksError] = useState(null);
  const [isLoadingGetTasks, setLoadingGetTasks] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoadingGetTasks(true);
        const newTasks = await getTodos({ token: userData.token });
        setTasks(newTasks.tasks);
      } catch (error) {
        setGetTasksError(error.message);
      } finally {
        setLoadingGetTasks(false);
      }
    };

    fetchTasks();
  }, []);

  return (
    <Wrapper>
      <Header />
      {!getTasksError && <Main isLoading={isLoadingGetTasks} />}
      {getTasksError && <ErrorMessage>{getTasksError}</ErrorMessage>}
    </Wrapper>
  );
};

export default Home;
