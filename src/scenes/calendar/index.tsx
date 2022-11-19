import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar, { EventApi, formatDate } from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { FC, useState } from "react";

import Header from "../../components/Header";
import { tokens } from "../../theme";

const handleDateClick = (selected: any) => {
  const title = prompt("Please enter a new title for your event");
  const calendarApi = selected.view.calendar;
  calendarApi.unselect();

  if (title) {
    calendarApi.addEvent({
      id: `${selected.dateStr}-${title}`,
      title,
      start: selected.startStr,
      end: selected.endStr,
      allDay: selected.allDay,
    });
  }
};

const handleEventClick = (selected: any) => {
  if (
    window.confirm(
      `Are you sure you want to delete the event '${selected.event.title}'`
    )
  ) {
    selected.event.remove();
  }
};

const Calendar: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* Calendar sidebar */}
        <Box
          flex="1 1 20%"
          bgcolor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event: any) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Calendar */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events: EventApi[]) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "1111",
                title: "Mock event 1",
                date: "2022-11-01",
              },
              {
                id: "2222",
                title: "Mock event 2",
                date: "2022-11-01",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
