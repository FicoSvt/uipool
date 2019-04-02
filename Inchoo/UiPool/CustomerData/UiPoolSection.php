<?php
namespace Inchoo\UiPool\CustomerData;
use Magento\Customer\CustomerData\SectionSourceInterface;

class UiPoolSection implements SectionSourceInterface
{
    /**
     * {@inheritdoc}
     */
    public function getSectionData()
    {
        return [
            'message' => 'Fico wuz here',
        ];
    }
}