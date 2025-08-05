import React, { ReactNode } from "react";
import { User } from "../types";

type Props = {
  users: User[];
  actionButton?: (user: User) => ReactNode;
};

export const UserCard = ({ users, actionButton }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {users.map((user) => {
        const weather = user.weather;
        return (
          <div
            key={user.login.uuid}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center">
              {user.name.first} {user.name.last}
            </h2>
            <p className="text-gray-600 text-center">{user.email}</p>
            <p className="text-gray-600 text-center">Gender: {user.gender}</p>
            <p className="text-gray-500 text-center text-sm mt-2">
              {user.location.city}, {user.location.country}
            </p>

            {weather ? (
              <div className="mt-4 bg-blue-50 p-3 rounded-md text-sm text-center">
                <p className="text-blue-700 font-medium">
                  Current temperature: {weather.current_weather.temperature} {weather.current_weather_units.temperature}
                </p>
                <p className="text-blue-700">
                  Max temperature: {weather.max_temperature} {weather.current_weather_units.temperature}
                </p>

                <p className="text-blue-700">
                  Min temperature: {weather.min_temperature} {weather.current_weather_units.temperature}
                </p>
              </div>
            ) : (
              <p className="mt-4 text-center text-gray-400">Weather error</p>
            )}
            {actionButton && <div className="mt-4">{actionButton(user)}</div>}
          </div>
        );
      })}
    </div>
  );
};
