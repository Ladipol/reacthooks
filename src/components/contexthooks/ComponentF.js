import { UserContext, ChannelContext } from "../../App";

const ComponentF = () => {
  return (
    <div>
      <UserContext>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return (
                  <div>
                    User context value {user}, channel context value {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext>
    </div>
  );
};
export default ComponentF;
