import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import zxcvbn from 'zxcvbn';

function LinearProgressWithLabel({label,...props}) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate"  color={label.color} 
        className={label.label==='Weak'?'error':label.label==='Fair'?'fair':'strong'} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{label.label}</Typography>
      </Box>
    </Box>
  );
}
const PasswordMeter = (password) => {
    const testedResult = zxcvbn(password.password);
    const createPasswordLabel = (result) => {
        switch (result.score) {
    //switch-case to determine the strength of password from weak<fair<good<strong 
            case 0:
                return {label:'Weak',color:'error'};
            case 1:
                return {label:'Weak',color:'error'};
            case 2:
                return {label:'Fair',color:'warning'};
            case 3:
                return {label:'Good',color:'warning'};
            case 4:
                return {label:'Strong',color:'success'};
            default:
                return {label:'Weak',color:'success'};
        }
    }
    return (
    <LinearProgressWithLabel label={(createPasswordLabel(testedResult))}/>) ;
}

export default PasswordMeter;
;