let obj = 
    {
        "Path": [ 
        {
            "Name": "User_path",
            "Variable": path_user
        },

        {
            "Name": "Directory_path",
            "Variable": path_directory
        },

        {
            "Name": "Database",
            "Variable": path_database
        },

        {
            "Name": "Logs",
            "Variable": path_logs
        }
    ],
  "Time": [
      {
          "Name": "Date today",
          "Variable": date_today
      }
  ],
  "Data": [
      {
          "Name": "Login",
          "Variable": user_input
      },

      {
          "Name": "Robot name",
          "Variable": robot_name
      }
    ]  
}

all_data = obj