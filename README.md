# 🎾 Central Park Tennis Court Monitor

Monitors NYC Parks for Central Park tennis court availability and sends SMS notifications.

## Quick Setup

1. **Access**: Visit the hosted page at `https://manjunathchet.github.io/tennis-court-monitor`
2. **Check**: Click "Check Now" to see current weekend availability
3. **SMS Setup** (optional):
   - Sign up at [twilio.com](https://www.twilio.com)
   - Buy a phone number (~$1/month)
   - Get Account SID, Auth Token, and phone number from console
   - Enter credentials in the tool
   - Test with "Test SMS" button
4. **Monitor**: Click "Start Auto-Check" to begin monitoring

## How It Works

- Monitors Central Park courts 19-24 for weekend availability
- Automatically detects current weekend (Sat/Sun)
- Filters by time preference (morning/evening)
- Sends notifications when courts become available
- Links directly to NYC Parks reservation system

## Twilio Phone Number Setup

When provisioning a Twilio phone number, use this GitHub Pages URL as the "Website URL" - it contains all required SMS compliance information.

## Settings

- **Time Filters**: Morning (before 1 PM) or Evening (1 PM+)
- **Auto-Check**: 30 seconds to 10 minutes intervals
- **Notifications**: Sound, browser popups, SMS

## Data Privacy

- All settings stored locally in your browser
- Phone number never saved to GitHub repo
- Only you can see your personal configuration

## Troubleshooting

- **No courts found**: Try different time filters or check manually
- **SMS not working**: Verify Twilio credentials and account funding
- **Errors**: Keep browser tab open, check internet connection

---

**Note**: Requires NYC Parks tennis permit to actually book courts. Tool only monitors availability.
