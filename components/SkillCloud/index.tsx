import theme from '../../global/theme';
import skillCloudStyles from './SkillCloud.styles';
import { SkillCloudProps } from './SkillCloud.types';

function SkillCloud({ skillList, ...restProps }: SkillCloudProps) {
  return (
    <div {...restProps} css={skillCloudStyles(theme)}>
      {skillList.map((skill, index) => (
        <span key={`skill-${index}`}>{skill} </span>
      ))}
    </div>
  );
}

export default SkillCloud;
